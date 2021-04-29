// ES Module
const pageFlip = new PageFlip(
      document.getElementById("example"),
        {
          // options here
        }
);

// Browser
const pageFlip = new St.PageFlip(
      document.getElementById("example"),
        {
          // options here
        }
);

pageFlip.loadFromHTML(document.querySelectorAll(".page"));
// ES Module
const pageFlip = new PageFlip(
      document.getElementById("example"),
        {

          // start page index
          startPage: 0,
          size: SizeType.FIXED,

          // width & height *(REQUIRED)
          width: 0,
          height: 0,

          // min/max width & height
          minWidth: 0,
          maxWidth: 0,
          minHeight: 0,
          maxHeight: 0,

          // draw book shadows
          drawShadow: true,

          // animation speed
          flippingTime: 1000,

          // allows to switch to portrait mode
          usePortrait: true,

          // z-index property
          startZIndex: 0,

          // auto resizes the parent container to fit the book
          autoSize: true,

          // max opacity of shadow
          maxShadowOpacity: 1,

          // shows book cover
          showCover: false,

          // supports mobile scroll?
          mobileScrollSupport: true

        }
);
//
// $("#flipbook").turn({
//     width: 400,
//     height: 300,
//     autoCenter: true
// });

// var Component = React.createClass({
//     getInitialState: function() {
//         return {
//             style: {
//                 logoHeight: 200
//             }
//         }
//     },
//
//     componentDidMount: function() {
//         window.addEventListener('scroll', this.handleScroll);
//     },
//
//     componentWillUnmount: function() {
//         window.removeEventListener('scroll', this.handleScroll);
//     },
//
//     handleScroll: function(event) {
//         let scrollTop = window.scrollY,
//                 minHeight = 30,
//                 logoHeight = Math.max(minHeight, 200 - scrollTop);
//         this.setState({
//             style: {
//                 logoHeight: logoHeight
//             }
//         });
//     },
//
//     render: function() {
//         return (
//             <div>
//                 <div className="container" style={{height: this.state.style.logoHeight}}>
//                     <img src='https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png' className='logo'/>
//                 </div>
//                 <div className="empty-space">
//
//                 </div>
//             </div>
//         );
//     }
// });
//
// ReactDOM.render(<Component/>, document.body);
