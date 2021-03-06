import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from 'gatsby';
import Emoji from '../utils/emoji';

export default function Feature(props) {
  const data = props.data;
  const link = `${data.node.fields.slug}`
    return (
        <Card 
        bg="dark" 
        text="white"
        style={{ width: '18rem' }}
        className="mb-2">
        <Card.Body>
            <Card.Title><Emoji label="camera" symbol={data.node.frontmatter.emoji}/>{data.node.frontmatter.title}</Card.Title>
            <Card.Text>
              {data.node.excerpt} 
            </Card.Text>
            <Emoji label="Backhand Index Pointing Right" symbol="pointing-right-hand"/>
            <Link to={link}>
               Demo
            </Link>
        </Card.Body>
        
        <Card.Footer>
          <small className="text-muted">Last updated on {data.node.frontmatter.date}</small>
        </Card.Footer>
      </Card>
    )
}