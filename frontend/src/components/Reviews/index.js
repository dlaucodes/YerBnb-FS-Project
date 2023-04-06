import "./Review.css"
import React from "react"
import { useParams, Link } from "react-router-dom"

const Reviews= (props)=>{
    const currentUser = useSelector((state)=> state.session.user)
    const listings = useSelector(state=> state.listing)
}