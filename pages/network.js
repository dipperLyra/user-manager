import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import useSWR from 'swr';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Network() {
    const { data, error } = useSWR('http://localhost:3000/api/vips/network', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <Header />

      <Link href="/">
            <a><i className="pi pi-home" style={{'fontSize': '3em'}}></i></a>
      </Link>
      
      <main className={styles.main}>
        
        <p className={styles.description}>
          <Link href="/network">
            <a>VIPs Network 🏛</a>
          </Link>
        </p>
        <DataTable value={data.active}>
            <Column field="username" header="Name"></Column>
            <Column field="email" header="Email"></Column>
        </DataTable>

        <p className={styles.description}>
          <Link href="/network">
            <a>With some more work 🏋🏽 these would also join us: </a>
          </Link>
        </p>
        <DataTable value={data.inActive}>
            <Column field="username" header="Name"></Column>
            <Column field="email" header="Email"></Column>
        </DataTable> 
      </main>

      <Footer />
    </div>
  )
}

