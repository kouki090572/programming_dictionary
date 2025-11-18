'use strict';
// main.js
// ==============================
// ① ここだけ編集すればOKゾーン
// ==============================

/**
 * カテゴリとリンクのデータ
 * ・URLを変えたい → url を変更
 * ・タイトルを変えたい → title を変更
 * ・説明文を変えたい → description を変更
 * ・新しいリンクを追加 → items にオブジェクトを追加
 * ・新しいカテゴリを追加 → この配列にオブジェクトを追加
 */
const linkData = [
                    {
                      id: "design",
                      label: "CSS",
                      emoji: "💧",
                      items: [
                        {
                          title: "クリッパス",
                          url: "https://bennettfeely.com/clippy/"
                        },
                        {
                          title: "CSSジェネレーター",
                          url: "https://cssgradient.io/"
                        },
                        {
                                        title: "CSS 三角形ジェネレーター",
                                        url: "https://www.cssportal.com/css-triangle-generator/"
                                      },
                                      {
                                        title: "ストライプ",
                                        url: "https://css-stripe-generator.firebaseapp.com/"
                                      },

                                      {
                                        title: "CSS ホバーアニモーション",
                                        url: "https://cssanimo.netlify.app/"
                                      },
                                      {
                                        title: "animista.net",
                                        url: "https://animista.net/play/basic/rotate/rotate-top"
                                      },
                                      {
                                        title: "CSSボックスシャドウジェネレーター",
                                        url: "https://hiroyuki-n.github.io/boxShadow_generator/"
                                      },
                                      {
                                        title: "ボックスシャドウ2",
                                        url: "https://front-end-tools.com/generateBoxshadow/"
                                      },
                                      {
                                        title: "CSSアニモーション",
                                        url: "https://b-risk.jp/blog/2021/01/anim-reference/"
                                      },
                                      {
                                        title: "CSS 配色テスター",
                                        url: "https://www.oh-benri-tools.com/tools/color/css-color-tester"
                                      },
                      ]
                    },
                    {
                      id: "HTML",
                      label: "HTML",
                      emoji: "📗",
                      items: [
                        {
                          title: "フレックスボックス",
                          url: "https://suiq.jp/flex-layout-generator/"
                        },
                        {
                                        title: "テーブル",
                                        url: "https://copypet.jp/category/parts/table/"
                                      },
                      ]
                    },
                    {
                      id: "article",
                      label: "まとめ記事",
                      emoji: "💻",
                      items: [
                        {
                          title: "DUB DESiGN",
                          url: "https://dubdesign.net/"
                        },
                        {
                                        title: "M_mdn",
                                        url: "https://developer.mozilla.org/ja/"
                                      },
                                      {
                                        title: "codepen",
                                        url: "https://codepen.io/trending/"
                                      },
                      ]
                    },
                    {
                      id: "material",
                      label: "素材",
                      emoji: "🍀",
                      items: [
                        {
                          title: "①画像やストック素材",
                          url: "https://pixabay.com/ja/"
                        },
                        {
                                        title: "女性の画像やストック素材",
                                        url: "https://girlydrop.com/"
                                      },
                                      {
                                        title: "飲食の画像やストック素材",
                                        url: "https://www.foodiesfeed.com/"
                                      },
                                      {
                                        title: "飲食の画像やストック素材",
                                        url: "https://www.foodiesfeed.com/"
                                      },
                      ]
                    }
                  ];
                  
                  // ==============================
                  // ② 以下は原則触らなくてOKゾーン
                  // ==============================
                  
                  document.addEventListener("DOMContentLoaded", () => {
                    const filterNav = document.getElementById("filterNav");
                    const mainContent = document.getElementById("mainContent");
                  
                    // --- フィルターボタンを作成 ---
                    // 「すべて」ボタン
                    const allBtn = document.createElement("button");
                    allBtn.textContent = "すべて";
                    allBtn.className = "filter-btn active";
                    allBtn.dataset.filter = "all";
                    filterNav.appendChild(allBtn);
                  
                    // 各カテゴリボタン
                    linkData.forEach((category) => {
                      const btn = document.createElement("button");
                      btn.textContent = category.label;
                      btn.className = "filter-btn";
                      btn.dataset.filter = category.id;
                      filterNav.appendChild(btn);
                    });
                  
                    // --- カテゴリーとリンク一覧を作成 ---
                    linkData.forEach((category) => {
                      const section = document.createElement("section");
                      section.className = "category";
                      section.dataset.category = category.id;
                  
                      const h2 = document.createElement("h2");
                      h2.className = "category-title";
                      h2.textContent = `${category.emoji} ${category.label}`;
                      section.appendChild(h2);
                  
                      const list = document.createElement("div");
                      list.className = "link-list";
                  
                      category.items.forEach((item) => {
                        const a = document.createElement("a");
                        a.className = "link-item";
                        a.href = item.url;
                        a.target = "_blank";
                        a.rel = "noopener noreferrer";
                  
                        const titleSpan = document.createElement("span");
                        titleSpan.textContent = item.title;
                  
                        const desc = document.createElement("small");
                        desc.textContent = item.description;
                  
                        a.appendChild(titleSpan);
                        a.appendChild(desc);
                        list.appendChild(a);
                      });
                  
                      section.appendChild(list);
                      mainContent.appendChild(section);
                    });
                  
                    // --- フィルタ機能 ---
                    const filterButtons = document.querySelectorAll(".filter-btn");
                    const categories = document.querySelectorAll(".category");
                  
                    filterButtons.forEach((btn) => {
                      btn.addEventListener("click", () => {
                        const filter = btn.dataset.filter;
                  
                        // ボタンの見た目を更新
                        filterButtons.forEach((b) => b.classList.remove("active"));
                        btn.classList.add("active");
                  
                        // カテゴリーの表示・非表示
                        categories.forEach((section) => {
                          const cat = section.dataset.category;
                  
                          if (filter === "all" || filter === cat) {
                            section.classList.remove("hidden");
                          } else {
                            section.classList.add("hidden");
                          }
                        });
                      });
                    });
                  
                    // クリックログ（あとでGA入れるならここ）
                    const links = document.querySelectorAll(".link-item");
                    links.forEach((link) => {
                      link.addEventListener("click", () => {
                        console.log("リンククリック:", link.href);
                      });
                    });
                  });