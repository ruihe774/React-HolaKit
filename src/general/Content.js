import styled from 'react-emotion'

export default styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0.7em 0;
  }
  pre {
    overflow-x: auto;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 1rem;
    code {
      font-size: 1rem;
      white-space: pre;
      overflow-wrap: normal;
    }
  }
  code {
    overflow-wrap: break-word;
  }
`
