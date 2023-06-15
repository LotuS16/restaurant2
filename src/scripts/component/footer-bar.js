class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    html, body {
        height: 100%;
    }
    
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #e7ab9a;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        text-align: center;
    }
    
    p{
        color: white;
        text-align: center;
    }
    
    @media (max-width: 768px) {
        footer {
          flex-direction: column;
          text-align: center;
        }
    }
</style>
<footer>
  
<p>Copyright ©2023 - <a href="https://github.com/LotuS16">LotuS16</a></p>

</footer>
      `;
  }
}

customElements.define("footer-bar", FooterBar);
