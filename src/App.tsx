/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <Footer />
    </main>
  );
}
