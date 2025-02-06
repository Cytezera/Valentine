import "./landing.css";
import React,{ useState,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
const Land = () => {
	const noButton = useRef(null);
	const [isPage, setIsPage] = useState(false);
	const [position, setPosition] = useState( {top:"50%", left: "50%" })
	const navigate = useNavigate();
	useEffect(() => {
		if (window.location.pathname === "/"){
			setIsPage(true);
		}else{
			setIsPage(false);
		}
	},[]);
	const moveButton = () => {
		const newTop = Math.random() * 80 + "%";
		const newLeft = Math.random() * 80 + "%"; 
		noButton.current.style.position = 'absolute';
		noButton.current.style.top = newTop; 
		noButton.current.style.left = newLeft;
	};
        const changePage = () => {
                navigate("/text");
        }
	if (!isPage){
		return;
	}
	return (
		<div className = "container">	
			<h1 className = "text"> Dear Meli, will you be my Valentine?</h1>
			<button className = "yes-button" onClick={changePage}> Yes </button>
			<button className = "no-button" onMouseEnter={moveButton} 
			ref = {noButton}	
			> No </button>
		</div>
	);
}
export default Land;
