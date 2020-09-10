import { StyleSheet } from "react-native"
let CirclePos = []
const circles = 18
for(let i=0; i<circles;i++){
    const posStyle = StyleSheet.create({
        position:{
            paddingLeft:50*Math.random(),
            paddingTop:80*Math.random()
        }
    })
    CirclePos.push(posStyle)
}
console.log(CirclePos)
export default CirclePos