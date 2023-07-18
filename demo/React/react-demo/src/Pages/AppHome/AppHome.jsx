import { useState } from 'react';
import AppContent from '../AppContent/AppContent';
import AppHeader from '../AppHeader/AppHeader';
import AppSider from '../AppSider/AppSider';
import { Layout } from 'antd';

const AppHome = () => {
  const [collapsed,setcollapsed] = useState(true)
  const handelcollapsed = () => {
    setcollapsed(!collapsed)
  }
  return (
    <>
      <Layout>
        <AppSider collapsed={collapsed} />
        <Layout>
          <AppHeader collapsed = {collapsed} setcollapsed = {handelcollapsed} />
          <AppContent />
        </Layout>
      </Layout>
    </>
  )
}

export default AppHome
