import { StyleSheet } from "react-native"
let circlePos = []
const circles = 18
for(let i=0; i<circles;i++){
    const posStyle = StyleSheet.create({
        position:{
            paddingLeft:50*Math.random(),
            paddingTop:80*Math.random()
        }
    })
    circlePos.push(posStyle)
}
console.log(circlePos)
export default circlePos