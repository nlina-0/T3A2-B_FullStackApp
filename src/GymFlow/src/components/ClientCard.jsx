import React from 'react'
import { Link } from 'react-router-dom';

const ClientCard = (props) => {

  return (
    <>
    {/* to={`/${props.clientType}/${props.id}`} */}
    <Link >
        <div className="card my-2">
            <footer className="card-footer">
            <p className="card-footer-item is-justify-content-flex-start">{props.name}</p>
            <p className="card-footer-item is-justify-content-flex-start">{props.age}</p>
            <p className="card-footer-item is-justify-content-flex-start">{props.contact}</p>
            </footer>
        </div>
      </Link>
    </>
  )
}

export default ClientCard