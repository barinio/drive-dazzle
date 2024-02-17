import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import rentalCars from './pages.module.scss';
import car from '../images/home-foto.png';

const HomePage = () => {
  return (
    <Section title="Ukrainian car rental">
      <Container>
        <div className={rentalCars.homeWrapper}>
          <section>
            <h2>Welcome to "Ukrainian car rental"!</h2>
            <div className={rentalCars.homeImg}>
              <img src={car} alt="car" />
            </div>
          </section>
          <section>
            <h2>About us</h2>
            <p>
              We are a professional car rental company dedicated to providing
              convenient and flexible mobility solutions for several years. Our
              goal is to offer our clients the highest quality service and a
              wide range of automotive solutions.
            </p>
          </section>
          <section className={rentalCars.servicesBlock}>
            <h2>Our Services</h2>
            <ol>
              <li>
                <h3>Car Rental for Every Taste and Budget:</h3>
                <ul>
                  <li>
                    <p>
                      A wide selection of cars from economy to executive models.
                    </p>
                  </li>
                  <li>
                    <p>
                      Flexible rates and individualized service for each
                      customer.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Corporate Rentals:</h3>
                <ul>
                  <li>
                    <p>
                      Special conditions for companies and business clients.
                    </p>
                  </li>
                  <li>
                    <p>A fleet of vehicles tailored to corporate needs.</p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Driver Services:</h3>
                <ul>
                  <li>
                    <p>Professional drivers with extensive experience.</p>
                  </li>
                  <li>
                    <p>Transfers and tours with comfort and reliability.</p>
                  </li>
                </ul>
              </li>
              <li>
                <h3>Additional Options and Services:</h3>
                <ul>
                  <li>
                    <p>
                      GPS navigation, child seats, additional insurance, and
                      more.
                    </p>
                  </li>
                  <li>
                    <p>24/7 customer support for your convenience.</p>
                  </li>
                </ul>
              </li>
            </ol>
          </section>
          <section>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                <p>
                  Reliability: Our cars undergo regular technical inspections.
                </p>
              </li>
              <li>
                <p>
                  Transparent and Honest Conditions: No hidden costs or
                  additional commissions.
                </p>
              </li>
              <li>
                <p>
                  Customer-Centric Approach: We are always ready to listen to
                  your needs and provide the best service.
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2>Contact Us</h2>
            <p>
              Feel free to reach out to us with any questions or to book our
              services. We are here to help ensure a safe and comfortable
              journey.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
};

export default HomePage;
