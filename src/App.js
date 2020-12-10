import "jquery/dist/jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

//mport $ from "jquery";

import Navigation from './views/Navigation'
import WhatIDo from './views/WhatIDo'
import Footer from './views/Footer'

//my Styles
import '../src/css/styles.css'

function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
      <main>
        <WhatIDo />
      </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
