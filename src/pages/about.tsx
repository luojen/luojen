import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/app/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <Layout className={'w-full h-full relative'}>
      <div className={`fixed left-0 pl-8 pr-4`} >
        <div style={{ fontFamily: 'Inter-Regular', fontWeight: 'normal', fontStyle: 'normal'}} className={"text-5xl lg:text-6xl pb-4"}>About</div>
        <div style={{ fontFamily: 'Inter-Regular', fontWeight: 'normal', fontStyle: 'normal'}} className={"text-base pb-4"}>
          Jen Luo is a multidisciplinary designer with 3+ years of experience.<br/>
          She is based in Los Angeles. <br/>
          Her practice is rooted in accessibility, sustainability, and community care. 
        </div>
        <div style={{ fontFamily: 'Inter-Regular', fontWeight: 'normal', fontStyle: 'normal'}} className={"text-base"}>
          She recently graduated from Stanford University, where she received her B.S. and M.S. in computer science, specializing in human-computer interaction. 
        </div>
      </div>
    </Layout>
  )
}
