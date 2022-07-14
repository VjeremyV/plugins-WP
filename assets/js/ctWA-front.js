(() => {
    let path = document.location.origin + '/wp-json/wa_tarot/v1/read';
    console.log(path);
    // fetch("https://type.fit/api/quotes")
    fetch(path)
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then((data) => console.log(data));
  })();