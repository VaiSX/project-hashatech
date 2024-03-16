import {mobile} from "../responsive"
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    overflow-x:hidden;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`
const Categories = () => {
  return (
    <>
    <h1>Product Categories</h1>
    <Container>
        {categories.map((item)=>( 
            <CategoryItem item={item} key={item.id} />
        ))}
    </Container>
    </>
  )
}

export default Categories