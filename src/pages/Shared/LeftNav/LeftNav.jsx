import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data=>setCategories(data))
        .catch(error=> console.error(error))
    },[])
    return (
        <div>
            <h3 className="fw-bolder">All Category</h3>
           <div className=' p-3'>
            {
                categories.map(category => <p key={category.id} > <Link to={`/catagory/${category.id}`} className='text-decoration-none' >{category.name}</Link> </p> )
            }
           </div>
        </div>
    );
};

export default LeftNav;