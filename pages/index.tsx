import Head from 'next/head'
import { useState, FormEvent, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      email,
      password
    }
    
    await signIn(data);
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Auth</title>
        <meta name="description" content="Creating an Authorization and Authentication App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next Auth
        </h1>
        <form 
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">Enter</button>
        </form>
      </main>
    </div>
  )
}