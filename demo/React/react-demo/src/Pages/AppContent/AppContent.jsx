import { Layout } from "antd"

const { Content } = Layout

const AppContent = () => {
  return (
    <>
    <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            我是content组件
          </Content>
    </>
  )
}

export default AppContent
