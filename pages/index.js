import AddUser from '@/components/AddUser'
import Navbar from '@/components/Navbar'
import UserList from '@/components/UserList'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>User Management App</title>
        
      </Head>
      <Navbar />
      <main>
        <AddUser />
        <UserList />
          
      </main>
    </>
  )
}
