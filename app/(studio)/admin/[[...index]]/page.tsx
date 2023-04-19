"use client"

import configSanity from '@/sanity.config';
import {NextStudio} from 'next-sanity/studio';

 const AdminPage=()=>{
    return <NextStudio config={configSanity}/>
}

export default AdminPage;