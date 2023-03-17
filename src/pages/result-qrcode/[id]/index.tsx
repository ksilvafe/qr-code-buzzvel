import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import {useRouter} from 'next/router'
import { baseUrl } from '@/pages';
import Link from 'next/link';
import { Button } from '@mui/material';
import styles from '@/styles/Home.module.css'

const ResultQRCode = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const {id} = router?.query;
  console.log(router)

  useEffect(() => {
    const fetchUser = async () => {
      if(id) {
        const user = await (await fetch(`${baseUrl}/api/users?id=${id}`, {method: 'GET', })).json()
        setUser(user);
      }
    }
    fetchUser();
  }, [router?.query, id])

  return (
    <div className={styles.content}>
        <p>Hello, my name is {user?.name}</p>
        <h1>My History</h1>
        <p>Lorem Ipsum is simply dummy text versions of Lorem Ipsum.</p>
        <Button variant="outlined"><a href={user?.linkedinURL || ""}>Linkedin</a></Button>
        <Button variant="outlined"><a href={user?.githubURL || ""}>Github</a></Button>
    </div>
  )


}
export default ResultQRCode