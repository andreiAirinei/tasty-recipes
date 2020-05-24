import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import SectionTitle from '../components/layout/SectionTitle';
import CallToActionCard from '../components/CallToActionCard/CallToActionCard';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tab from 'react-bootstrap/Tab';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CollectionPage = () => {

  const handleDropdown = () => {
    console.log('clicked');
  }

  return (
    <>
      <div className='collection-page'>
        <div className="collection-hero">
          <Jumbotron
            imgURL='cooking2.jpg'
            title='Enjoy our delicious meals and desserts'
          />
          <CallToActionCard />
        </div>
        {/* <Container className='directory'>
          <h1>Recipes</h1>
        </Container> */}
      </div>

      <Container className='collection-navbar' fluid='xl'>
        <SectionTitle title='Recipes' />
        <StickyContainer className='mb-5'>
          <Row>
            <Col xs={3}>
              <Sticky topOffset={-150} bottomOffset={150}>
                {
                  ({ style, isSticky }) => (
                    <div
                      style={{ ...style, marginTop: isSticky ? '150px' : '0px' }}
                    >
                      <Button block size='' variant='secondary' >
                        All
                      </Button>
                      <Button block size='' variant='outline-secondary' >
                        Latest
                      </Button>
                      <Button block size='' variant='outline-secondary' >
                        Category
                      </Button>
                      <Button block size='' variant='outline-secondary' >
                        Country
                      </Button>

                      <Nav variant="pills" defaultActiveKey="/home" className='flex-column'>
                        <Nav.Item>
                          <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="disabled" disabled>
                            Disabled
                          </Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Dropdown" id="nav-dropdown">
                          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </div>)
                }
              </Sticky>
            </Col>
            <Col xs={9}>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil modi rerum, facere optio adipisci veniam quaerat ad eos praesentium? Quo deleniti vitae nam voluptate laudantium veritatis porro repudiandae omnis id repellendus error quasi beatae labore suscipit eligendi inventore veniam soluta atque laborum architecto, iusto excepturi rerum sint! Rem, obcaecati illo laudantium ex quasi est, deleniti consequatur perspiciatis iusto, natus error neque architecto adipisci vitae molestias aliquid hic quas quos culpa praesentium voluptatibus id facere dolore laboriosam! Molestias modi aliquid vitae voluptate cum laboriosam similique quaerat ipsum. Dolore esse velit veritatis obcaecati sapiente ad eos, laudantium deserunt beatae! Corporis aperiam libero veritatis non nihil nulla pariatur dolorem, optio, natus iste delectus est laborum omnis ex! Odio provident consequatur possimus, consectetur deserunt nihil iste culpa facilis laboriosam ad tempora distinctio repudiandae placeat iure. Odio ratione excepturi id laborum reprehenderit possimus illum natus nostrum animi consequatur, dicta delectus necessitatibus distinctio illo sunt et ducimus, dolorum asperiores. Odio non expedita maiores soluta, corrupti pariatur quidem. Eveniet dicta aspernatur voluptates sit blanditiis maiores perferendis, quas hic est deserunt laborum provident quisquam maxime deleniti cumque corrupti impedit error! Perferendis, odio? Totam, eum quos praesentium dolores, ipsum, temporibus rerum provident ipsam commodi sed hic veniam. Quos minus exercitationem quam id voluptatibus eius ullam, aliquid ducimus facilis, qui vel reprehenderit harum! Aut nobis quam sunt, obcaecati quis quidem rerum nemo aperiam ullam cum eligendi maiores quaerat exercitationem nostrum consequuntur, aliquid facere delectus neque reiciendis! Iure consequatur fugiat expedita facilis commodi, eveniet voluptatum, perferendis ipsa saepe nihil aut molestias quibusdam? Tempora ipsa ab, provident delectus dolorem fugit minus qui officia iure nam rem voluptas officiis itaque perspiciatis doloremque facere quae. Quas adipisci possimus beatae perferendis modi doloremque recusandae suscipit animi? Tempore sunt a aut eos harum dolorum excepturi accusamus, saepe dignissimos at, iure quasi quaerat delectus? Ad molestiae, eos doloremque hic ullam ea consequuntur voluptates at cupiditate iste consequatur natus dignissimos mollitia et dolorem ipsa optio ducimus nisi? Error est numquam officia quod eligendi provident earum nisi dolor dicta debitis quaerat magni, molestiae aspernatur necessitatibus, accusamus sed temporibus! Voluptatibus cum, maiores magnam repellendus fugit enim delectus, sint placeat optio aut iusto, nemo deleniti. Voluptatum necessitatibus adipisci asperiores debitis eligendi velit quo incidunt maiores corporis molestiae, ipsam mollitia, quam delectus. Aliquam eius esse neque nulla labore dolores eaque accusamus adipisci quas? Officiis consectetur expedita totam, voluptatibus velit magni quod quaerat doloremque consequatur eos dolores aperiam dolorum, assumenda natus soluta. Voluptates, omnis similique quis at ullam maxime perspiciatis perferendis architecto repellat? Reiciendis corporis at, incidunt vero modi minima nostrum rem quidem ad neque, suscipit odio dolorum vitae magni veritatis aut, quasi accusamus a delectus fuga. Ab non quo eaque iste repellat accusamus natus unde architecto sit dicta ipsam aliquid earum, nam aperiam laboriosam asperiores nostrum sint maiores! Porro vitae magnam quasi? Distinctio hic omnis odit modi nisi voluptate dolorum molestiae similique maiores voluptatem iusto veritatis repudiandae quibusdam placeat vel suscipit sed maxime perspiciatis neque aspernatur error totam eum, dolore dolor! Provident quos vitae doloribus numquam qui. Dignissimos atque distinctio dolorum tenetur!</div>
            </Col>
          </Row>
        </StickyContainer>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dropdown" id="nav-dropdown">
                  <NavDropdown.Item eventKey="third">Third Pane</NavDropdown.Item>
                  <NavDropdown.Item eventKey="fourth">Fourth Pane</NavDropdown.Item>
                </NavDropdown>
                <p className='custom-dropdown-button px-3 py-2 m-0' onClick={handleDropdown}>
                  Country +
                </p>
                <div className="custom-dropdown-list ml-3">
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                  </Nav.Item>
                </div>
                <Nav.Item>
                  <Nav.Link eventKey="5">Tab 5</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6">Tab 6</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p className='bg-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, minima! Reprehenderit sapiente repudiandae eum consequuntur veritatis, quaerat dolore quam praesentium sequi et error. Aspernatur quaerat accusamus ad numquam voluptates dolor necessitatibus omnis, provident vitae sapiente sed eum error dignissimos. Delectus libero exercitationem unde alias! Esse hic cum dolore, doloribus ullam nostrum et sit corporis velit iure perspiciatis sequi molestias non alias ad nam quisquam aperiam incidunt, nesciunt deleniti quis odio quae. Possimus in alias unde ratione amet, voluptates tempore harum? Qui, voluptates officia suscipit libero obcaecati distinctio, inventore, saepe eligendi laudantium doloribus eius tempora iste velit dignissimos maxime assumenda non?</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p className='bg-success'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat temporibus provident nobis beatae perferendis, saepe obcaecati quibusdam nihil architecto, eius voluptatem dolore earum ea sint repudiandae laudantium ut qui facere quis consequatur sunt libero officiis odit. Illum fugit sint consequuntur. Eveniet itaque placeat accusamus minus necessitatibus eius veritatis rerum ab!</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className='bg-success'>THIRD</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p className='bg-success'>FOURTH</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <div className="white-space"></div>
    </>
  )
}

export default CollectionPage;
