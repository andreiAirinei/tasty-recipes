import React, { useState, useEffect, useRef } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

// Redux
import { connect } from 'react-redux';

// Components
import Jumbotron from '../components/Jumbotron/Jumbotron';
import SectionTitle from '../components/layout/SectionTitle';
import CallToActionCard from '../components/CallToActionCard/CallToActionCard';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CollectionPage = ({ categories }) => {
  const [currentButton, setCurrentButton] = useState(null);
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    console.log(categories);
  });

  const handleSidebarButton = e => {
    if (e.target !== currentButton) {
      console.log(e.target.dataset.name);
      e.target.classList.add('btn-category--active');
      if (currentButton) currentButton.classList.remove('btn-category--active');
      setCurrentButton(e.target);
    }
  }

  const handleButtonExpand = () => {
    console.log('Dropdown');
    if (!dropdownToggle) {
      dropdownRef.current.classList.add('category-dropdown--expanded');
    } else {
      dropdownRef.current.classList.remove('category-dropdown--expanded');
    }
    setDropdownToggle(!dropdownToggle);
  }

  return (
    <>
      <div className='collection-page'>
        <div className="collection-hero">
          <Jumbotron
            imgURL='cooking1.jpg'
            title='Enjoy our delicious meals and desserts'
          />
          <CallToActionCard />
        </div>
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
                      className='sidebar-category'
                      style={{ ...style, marginTop: isSticky ? '150px' : '0px' }}
                    >
                      <button data-name='all' id='nav1' onClick={handleSidebarButton} className='btn-category w-100 text-left text-decoration-none border-0  my-1 px-2 py-1 text-dark'>All</button>
                      <button onClick={handleSidebarButton} className='btn-category w-100 text-left text-decoration-none border-0 my-1 px-2 py-1 text-dark'>Latest</button>
                      <button onClick={handleSidebarButton} className='btn-category w-100 text-left text-decoration-none border-0 my-1 px-2 py-1 text-dark'>Category</button>
                      <button onClick={handleButtonExpand} className='btn-category w-100 text-left text-decoration-none border-0 my-1 px-2 py-1 text-dark'>
                        Other
                        <img src={require('../assets/angle-down.svg')} alt="Dropdown" className='ml-2' />
                        <img src={require('../assets/angle-up.svg')} alt="Dropdown" className='ml-2' />
                      </button>
                      <div ref={dropdownRef} className="category-dropdown">
                        <button onClick={handleSidebarButton} className='btn-category w-100 text-left text-decoration-none border-0 my-1 px-2 py-1 text-dark text-dark pl-4'>Category1</button>
                        <button onClick={handleSidebarButton} className='btn-category w-100 text-left text-decoration-none border-0 my-1 px-2 py-1 text-dark text-dark pl-4'>Category2</button>
                        <button onClick={handleSidebarButton} className='btn-category w-100 text-left text-decoration-none border-0 my-1 px-2 py-1 text-dark text-dark pl-4'>Category3</button>
                        <button onClick={handleSidebarButton} className='btn-category w-100 text-left text-decoration-none border-0 my-1 px-2 py-1 text-dark text-dark pl-4'>Category4</button>
                        <button onClick={handleSidebarButton} className='btn-category w-100 text-left text-decoration-none border-0 my-1 px-2 py-1 text-dark text-dark pl-4'>Category5</button>
                      </div>
                      <button onClick={handleSidebarButton} className='btn-category w-100 text-left text-decoration-none border-0 my-1 px-2 py-1 text-dark'>Country</button>
                    </div>)
                }
              </Sticky>
            </Col>
            <Col xs={9}>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil modi rerum, facere optio adipisci veniam quaerat ad eos praesentium? Quo deleniti vitae nam voluptate laudantium veritatis porro repudiandae omnis id repellendus error quasi beatae labore suscipit eligendi inventore veniam soluta atque laborum architecto, iusto excepturi rerum sint! Rem, obcaecati illo laudantium ex quasi est, deleniti consequatur perspiciatis iusto, natus error neque architecto adipisci vitae molestias aliquid hic quas quos culpa praesentium voluptatibus id facere dolore laboriosam! Molestias modi aliquid vitae voluptate cum laboriosam similique quaerat ipsum. Dolore esse velit veritatis obcaecati sapiente ad eos, laudantium deserunt beatae! Corporis aperiam libero veritatis non nihil nulla pariatur dolorem, optio, natus iste delectus est laborum omnis ex! Odio provident consequatur possimus, consectetur deserunt nihil iste culpa facilis laboriosam ad tempora distinctio repudiandae placeat iure. Odio ratione excepturi id laborum reprehenderit possimus illum natus nostrum animi consequatur, dicta delectus necessitatibus distinctio illo sunt et ducimus, dolorum asperiores. Odio non expedita maiores soluta, corrupti pariatur quidem. Eveniet dicta aspernatur voluptates sit blanditiis maiores perferendis, quas hic est deserunt laborum provident quisquam maxime deleniti cumque corrupti impedit error! Perferendis, odio? Totam, eum quos praesentium dolores, ipsum, temporibus rerum provident ipsam commodi sed hic veniam. Quos minus exercitationem.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum odio, obcaecati saepe quae nostrum voluptatum ullam accusamus repudiandae exercitationem ex modi blanditiis quidem autem illo nam maxime corporis quos facere.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam illo officia nostrum maxime asperiores repellat necessitatibus enim debitis ex ab deleniti consequuntur eos, iure impedit perspiciatis. In, explicabo. Adipisci aliquid omnis dolore eveniet, nobis amet veritatis nisi atque placeat delectus, iure, aperiam iste totam molestias maxime ullam sequi nihil! Maiores totam eaque perspiciatis ea quaerat neque! Earum libero incidunt laudantium laborum deleniti perferendis itaque soluta neque maiores nihil non maxime eius corporis, voluptate magnam, veritatis ad aperiam dicta eveniet reiciendis voluptatibus omnis animi provident ab. Fugit reprehenderit totam modi est eos a earum ipsam amet ratione? Nobis voluptatum nisi adipisci! Tempore tempora tenetur ab animi laudantium natus maxime, praesentium obcaecati quod, ad voluptatum delectus quae facilis voluptatibus aliquid hic, dolore voluptas commodi! Aliquid at sunt hic amet quibusdam blanditiis sapiente quasi, similique incidunt voluptas quae necessitatibus natus soluta nulla quo maiores alias error aperiam cumque. Doloremque dolorum non ullam rerum, natus quod facilis inventore iusto quas facere incidunt voluptate maxime error voluptatibus commodi veritatis quam libero blanditiis odit reiciendis. Laborum ut repellat ipsa reiciendis iure quo sequi totam at accusantium. Possimus dolore accusamus eaque, optio modi in natus enim laboriosam velit id numquam alias ipsa reiciendis, ad minima assumenda cum veniam! Hic quisquam vitae, mollitia laudantium aspernatur delectus numquam porro error ut nihil autem tempore perspiciatis nemo ipsum architecto expedita dolores laborum, nesciunt praesentium officiis facilis quam quaerat iusto. Doloremque eius quo, accusantium ullam ipsam totam tenetur distinctio nemo incidunt rem harum corporis neque ipsum officiis nobis dolorem, saepe aliquam, in tempora ducimus provident tempore? Porro iure tempore beatae assumenda culpa illum blanditiis quo, quaerat reprehenderit quia. Dicta provident eveniet porro quae eius harum perferendis unde asperiores, enim libero reprehenderit alias iure laboriosam earum omnis natus quibusdam, hic dolores repudiandae impedit nemo facilis. Explicabo illum temporibus odit distinctio quod minima.
              </div>
            </Col>
          </Row>
        </StickyContainer>
      </Container>
      <div className="white-space"></div>
    </>
  )
}

const mapStateToProps = state => ({
  categories: state.category.categories
});

export default connect(mapStateToProps)(CollectionPage);
