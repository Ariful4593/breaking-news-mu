import React from 'react';
import {Card, Button,Row,Col} from 'react-bootstrap'
const TopNews = () => {
    return (
        <div>
            <Card >
            <Card.Img variant="top" src="https://a57.foxnews.com/hp.foxnews.com/images/2020/08/1280/533/c886613e7394c106046edef865395532.jpg?tl=1&ve=1" />
            <Card.Body>
                <Card.Title>Kenosha police union gives account of Jacob Blake shooting, says depictions are 'wholly inaccurate'</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Row>
                    <Col className="text-left">
                        <p><a href="#">Accused Kenosha shooter's lawyer claims self-defense amid new video</a> </p>
                        <p><a href="#">Kenosha County sheriff says shooting suspect may have been among group that sought to be deputized</a></p>
                        <p><a href="#">NFL Hall of Famer: 'It's scary to be a Black man in America' in wake of police shooting</a></p>
                        <Card>
                        <Card.Img variant="top" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/1024/576/b59eaeb6-palininternal5454.jpg?tl=1&ve=1" />
                        <Card.Body>
                            <Card.Title>Former VP candidate’s defamation suit gets judge’s go-ahead</Card.Title>
                            <Card.Text>
                            Civil rights attorney Leo Terrell blasts inaction by Democrats as 'thugs attack law-abiding citizens'
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className="text-left">
                    <p><a href="#">Accused Kenosha shooter's lawyer claims self-defense amid new video</a> </p>
                        <p><a href="#">Kenosha County sheriff says shooting suspect may have been among group that sought to be deputized</a></p>
                        <p><a href="#">NFL Hall of Famer: 'It's scary to be a Black man in America' in wake of police shooting</a></p>
                        <Card>
                        <Card.Img variant="top" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/07/1024/576/AP20205182733114.jpg?tl=1&ve=1" />
                        <Card.Body>
                            <Card.Title>Portland mayor’s condo draws sit-in after he, Trump trade barbs</Card.Title>
                            <Card.Text>
                            NPR worries that declaring violent Portland protests to be riots could be racist
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/03/1024/576/Super-Tuesday-II-AP-11.jpg?tl=1&ve=1" />
                        <Card.Body className="text-left">
                            <Card.Title>Study suggests 2020 polls may be missing 'shy' Trump voters</Card.Title>
                            <Card.Text>
                            Michael Moore warns Dems: Trump voters' enthusiasm is 'OFF THE CHARTS!'
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src="https://a57.foxnews.com/hp.foxnews.com/images/2020/08/1024/576/c96d1b7e096a37e2e25948d4dab36d72.jpg?tl=1&ve=1" />
                        <Card.Body className="text-left">
                            <Card.Title>Colin Kaepernick pens note to LeBron James after NBA strike</Card.Title>
                            <Card.Text>
                            Obama advised LeBron James, other NBA players to resume season: Report
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
            </Card>
        </div>
    );
};

export default TopNews;