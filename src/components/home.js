import React from "react";

function Home() {
    return(
        <div>
            <div>
                <img style={{width:'40px', background:'none',
                    marginTop:  '10px',
                    float:'left'
            }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdnqiRPOjgxd9nTOahCetS5wJ0XNqPs6c0lv4y6lwzg&s" alt="" />
            </div>
            <h1>Home</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper-item">
                    <img src="https://screen-mobile.co.il/image/cache//catalog/Cases/22.10.22/Apple%20iPhone%2014%20Pro/Color/Black-1000x1000.png" alt="" style={{width: '20%', height: '20%'}}/>
                </div>
                <div className="text-wrapper-item">
                    <span style={{marginRight:'20px',
                        backgroundColor:'#ffae00db',
                        borderRadius: '5px',
                        fontSize: '12px',
                        color:'white',
                        fontWeight: 'bold',
                        padding: '5px',
                        display: 'inline-block',
    
                }}>
                        I-phone 15
                    </span>
                    <span
                    style={{marginRight:'20px',
                    backgroundColor:'#ffae00db',
                    borderRadius: '5px',
                    fontSize: '12px',
                    color:'white',
                    fontWeight: 'bold',
                    padding: '5px',
                    display: 'inline-block',

            }}>
                        Price: $1000.00
                    </span>
                </div>

                <div className="btn-wrapper-item">
                    <button style={{marginTop:'15px', 
                    height: '40px', width: '100px',
                    borderRadius: '10px', 
                    backgroundColor: '#000000', 
                    color: '#ffffff', 
                    border: 'none', 
                    cursor: 'pointer',
                }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;