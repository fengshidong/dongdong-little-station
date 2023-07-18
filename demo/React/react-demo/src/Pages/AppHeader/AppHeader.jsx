import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button } from 'antd';
import { styled } from "styled-components"

const { Header } = Layout;
const StyledHeader = styled(Header)`
padding: 0;
background-color: #fff;
`

const AppHeader = ({collapsed,setcollapsed}) => {
  return (
    <>
      <StyledHeader>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={setcollapsed}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </StyledHeader>
    </>
  )
}

export default AppHeader