import React from "react";

function Header(props) {
    console.log(props.cardItems, "props in header");
    return(
        <div>
            <div>
                <span style={{
                    position: 'absolute',
                    left: '10px',
                    background: 'red',
                    fontSize: 'large',
                    width: '23px',
                    borderRadius: '11px',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '5px',
                    display: 'inline-block',
                
                }}>{props.cardItems.length}</span>
                <img style={{width:'40px', background:'none',
                    marginTop:  '10px',
                    float:'left'
            }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdnqiRPOjgxd9nTOahCetS5wJ0XNqPs6c0lv4y6lwzg&s" alt="" />
            </div>
            
        </div>
    )
}

export default Header;