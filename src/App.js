import React, { useState } from "react";
import "./styles.css"; // فرض می‌کنیم CSS شما در این فایل است

const data = [
  {
    category: "Education",
    items: [
      {
        university: "Envato University",
        degree: "B.sc in Computer Engineer",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        date: "2010-2014",
      },
      {
        university: "Envato University",
        degree: "B.sc in Computer Engineer",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        date: "2010-2014",
      },
    ],
  },
  {
    category: "Work History",
    items: [
      {
        university: "Apple Company",
        degree: "Software Engineer",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        date: "2012-2015",
      },
      {
        university: "Apple Company",
        degree: "Software Engineer",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        date: "2012-2015",
      },
      {
        university: "Apple Company",
        degree: "Software Engineer",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        date: "2012-2015",
      },
      {
        university: "Apple Company",
        degree: "Software Engineer",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        date: "2012-2015",
      },
    ],
  },
  {
    category: "Programming Skill",
    items: [
      {
        university: "Html,Css",
        degree: "professional",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
      {
        university: "Php,Laravel",
        degree: "beginner",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      },
    ],
  },
  {
    category: "Designer Skills",
    items: [
      {
        university: "Envato University",
        degree: "B.sc in Computer Engineer",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        date: "2010-2014",
      },
      {
        university: "Envato University",
        degree: "B.sc in Computer Engineer",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        date: "2010-2015",
      },
      {
        university: "Envato University",
        degree: "B.sc in Computer Engineer",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        date: "2010-2015",
      },
    ],
  },
  {
    category: "SEO SKills",
    items: [
      {
        university: "Envato University",
        degree: "B.sc in Computer Engineer",
        description:
          "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        date: "2010-2014",
      },
    ],
  },

  // Add more categories like 'Work History', 'Programming Skill', etc.
];

function App() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          {data.map((section, index) => (
            <li
              key={index}
              className={activeCategory === index ? "active" : ""}
              // وقتی روش کلیک کنیم اکتیوکتگوری به ایندکس کلیک شده تغیر میکند
              onClick={() => setActiveCategory(index)}
            >
              <span className="icon">{/* Add relevant icon */}</span>
              {section.category}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <div class="section-head">
          <h3 class="section-head__title">Resume</h3>
          <p class="section-head__caption">My formal Bio Details</p>
          <span class="section-head__line"></span>
        </div>
        {/* این قسمت تمام آیتم‌های مربوط به دسته‌بندی فعال را پیمایش کرده و هر کدام را به عنوان یک resume-item نمایش می‌دهد. */}
        <div className="resume-timeline">
          {data[activeCategory].items.map((item, index) => (
            <div key={index} className="resume-item">
              <div className="circle"></div>
              <div className="resume-info">
                <nav className="flex">
                  <h3 className="resume-title">{item.university}</h3>
                  {/* این شرط بررسی می‌کند که آیا item.date وجود دارد یا خیر. اگر وجود داشته باشد،
                   span حاوی تاریخ نمایش داده می‌شود، وگرنه هیچ چیزی نمایش داده نمی‌شود. */}
                  {item.date && (
                    <span className="resume-date">{item.date}</span>
                  )}
                </nav>
                <h4 className="resume-degree">{item.degree}</h4>
                <p className="resume-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
