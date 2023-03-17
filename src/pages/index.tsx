import QRCode from 'qrcode.react';
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import Router from 'next/router';
import { Box, Button, TextField } from '@mui/material';
export const baseUrl = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : '';
    
export default function Home() {
  const [userId, setUserId] = useState("")
  const [getcontent, setGetContent] = useState({ 
    name: '',
    linkedinURL: '',
    githubURL: ''
   });

   const [qrCodePath, setQrCodePath] = useState('');

   const handleNameChange = (event: any) => {
    setGetContent({ ...getcontent, name: event.target.value });
   }

   const handleLinkedinChange = (event: any) => {
    setGetContent({ ...getcontent, linkedinURL: event.target.value });
   }

   const handleGithubChange = (event: any) => {
    setGetContent({ ...getcontent, githubURL: event.target.value });
   }

   const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch(`${baseUrl}/api/users`, {method: 'POST', body: JSON.stringify(getcontent)});
    const idFromResponse = response?.headers?.get('id')

    const path = `${baseUrl}/result-qrcode/${idFromResponse}`;
    setUserId(idFromResponse)
    //ex: app-vercel.app/result-qrcode
    // const path = `${baseUrl}/result-qrcode/${getcontent.name}?githubUrl=${getcontent.githubURL}&linkedinUrl=${getcontent.linkedinURL}`;
    setQrCodePath(path);
    
  };

  const handleRedirectToQrCode = () => {
    Router.push({
      pathname: `result-qrcode/${userId}`,
    })
  }

  return (
    <div className="">
      <form className={styles.content} onSubmit={handleSubmit}>
      <div className="">
        <h1 className={styles.title}>QR Code Image Generator</h1>
      </div>
      <Box 
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
       fullWidth 
       label="Name" 
       id="fullWidth"
       value={getcontent.name}
          onChange={ (e) => handleNameChange(e)} />
    </Box>
      <Box 
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
       fullWidth 
       type="url"
       label="Linkedin URL" 
       id="fullWidth"
       value={getcontent.linkedinURL}
         onChange={ (e) => handleLinkedinChange(e)} />
    </Box>
      <Box 
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
       fullWidth
       type="url" 
       label="Github URL" 
       id="fullWidth"
       value={getcontent.githubURL}
       onChange={ (e) => handleGithubChange(e)} />
    </Box>
      <Button type='submit' variant="contained">Gerar QR Code</Button>

      {qrCodePath && (
        <>
          <span>Scan Me</span>

          <span>{getcontent.name}</span>
          <QRCode value={qrCodePath} />
          <button
            onClick={() => handleRedirectToQrCode()}
          >Abrir link</button>
          <input type="text" disabled value={qrCodePath} name="urlMounted" id="url-mounted" />
        </>
      )}
    </form>
    </div>
  )
}
