export default (req, res) => {
    res.status(200).json({ 
        posts: [
            {title: "A", content: "xcvxvx"},
            {title: "B", content: "qwert"},
            {title: "C", content: "xcvxcvxcvxc"},
            {title: "D", content: "mnopq"},
            {title: "E", content: "aeiou"},
            {title: "F", content: "cxvxcvxcvxvxvxv"},
        ]
    })
  }
  