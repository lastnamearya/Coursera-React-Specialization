import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const Details = ({ dish }) => {

  const comments = dish.comments.map( (comment) => {
    return (
      <li key={comment.id}>
        {comment.comment} <br />
        -- {comment.author}
      </li>
    )
  })

  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle heading="true">{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
      <div className="container">
        <h5>Comments</h5>
        <ul>
          {comments}
        </ul>
      </div>
    </Card>
  )
}

export default Details;