import '../../styles/Hero.css';
import HeroCTA from './HeroCTA';
import HeroFooter from './HeroFooter';
import HeroOptions from './HeroOptions';

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Free trivia, every category</p>
      <h1 className="hero-heading">How much do you actually know?</h1>
      <HeroOptions />
      <HeroCTA />
      <HeroFooter />
    </section>
  )
}
