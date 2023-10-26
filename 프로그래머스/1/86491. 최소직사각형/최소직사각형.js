const solution = (sizes) => {
    let w = [];
    let h = [];
    sizes.forEach((v,i) => {
      w[i]=Math.max(...v)
      h[i]=Math.min(...v)
    })
    
    return Math.max(...w)*Math.max(...h);
  }