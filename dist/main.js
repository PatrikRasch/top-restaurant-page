(()=>{"use strict";function e(){document.querySelector("#content"),document.querySelector(".top");const e=document.querySelector(".tabSwitch"),t=document.querySelector(".homeTab");t.classList.add("option"),t.textContent="Home",e.appendChild(t);const n=document.querySelector(".menuTab");n.classList.add("option"),n.textContent="Menu",e.appendChild(n);const d=document.querySelector(".contactTab");d.classList.add("option"),d.textContent="Contact",e.appendChild(d)}function t(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("footer"),e.appendChild(t)}function n(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("mainContent"),e.appendChild(t);const n=document.createElement("div");n.classList.add("leftSide"),t.appendChild(n);const d=document.createElement("div");d.classList.add("title"),d.textContent="Piada Italian Street Food",n.appendChild(d);const c=document.createElement("div");c.classList.add("description"),c.textContent="Piada Italian Street Food is great it might obliterate your insides. \r\n",c.textContent+="Matter of fact, under 15% of our customers leave without spending 30 minutes at our bathroom prior to departure.",n.appendChild(c);const a=document.createElement("button");a.classList.add("order"),a.textContent="Make an order",n.appendChild(a);const s=document.createElement("img");s.classList.add("imgBurger"),s.src="../src/img/meal.png",t.appendChild(s)}const d=document.querySelector("#content"),c=document.querySelector(".homeTab"),a=document.querySelector(".menuTab"),s=document.querySelector(".contactTab");function i(){d.innerHTML=""}c.classList.add("viewing"),e(),n(),t(),c.addEventListener("click",(d=>{i(),e(),n(),t(),c.classList.add("viewing"),a.classList.remove("viewing"),s.classList.remove("viewing")})),a.addEventListener("click",(n=>{i(),e(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menuHeader"),e.appendChild(t);const n=document.createElement("div");n.classList.add("title"),n.classList.add("menuTitle"),n.textContent="Menu",t.appendChild(n);const d=document.createElement("div");d.classList.add("menuDescription"),d.textContent="We keep an optimised limited selection.",t.appendChild(d);const c=document.createElement("div");c.classList.add("menu"),t.appendChild(c);const a=document.createElement("div");a.classList.add("menuItem"),c.appendChild(a);const s=document.createElement("div");s.classList.add("menuItemTitle"),s.textContent="Salty Macaroni",a.appendChild(s);const i=document.createElement("img");i.classList.add("menuItemImg"),i.src="../src/img/ainsley.png",a.appendChild(i);const o=document.createElement("div");o.classList.add("menuItemDescription"),o.textContent="The saltiest and spiciest macaroni you've ever tasted, with a hint of wine",a.appendChild(o);const l=document.createElement("div");l.classList.add("menuItem"),c.appendChild(l);const m=document.createElement("div");m.classList.add("menuItemTitle"),m.textContent="Whipped Potatoes",l.appendChild(m);const r=document.createElement("img");r.classList.add("menuItemImg"),r.src="../src/img/ainsley.png",l.appendChild(r);const u=document.createElement("div");u.classList.add("menuItemDescription"),u.textContent="Six potatoes whipped together in one delicious whipped potato meal",l.appendChild(u);const p=document.createElement("div");p.classList.add("menuItem"),c.appendChild(p);const C=document.createElement("div");C.classList.add("menuItemTitle"),C.textContent="Circle K Burger",p.appendChild(C);const h=document.createElement("img");h.classList.add("menuItemImg"),h.src="../src/img/ainsley.png",p.appendChild(h);const L=document.createElement("div");L.classList.add("menuItemDescription"),L.textContent="Double bacon-cheeseburger with bonus rekesalat on top *juicy*",p.appendChild(L);const v=document.createElement("div");v.classList.add("menuItem"),c.appendChild(v);const g=document.createElement("div");g.classList.add("menuItemTitle"),g.textContent="Gasoline",v.appendChild(g);const E=document.createElement("img");E.classList.add("menuItemImg"),E.src="../src/img/ainsley.png",v.appendChild(E);const y=document.createElement("div");y.classList.add("menuItemDescription"),y.textContent="A tasty and delicious way to end it all in style at our restaurant",v.appendChild(y)}(),t(),a.classList.add("viewing"),c.classList.remove("viewing"),s.classList.remove("viewing")})),s.addEventListener("click",(n=>{i(),e(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menuHeader"),e.appendChild(t);const n=document.createElement("div");n.classList.add("title"),n.classList.add("menuTitle"),n.textContent="Contact us",t.appendChild(n);const d=document.createElement("div");d.classList.add("menuDescription"),d.textContent="Get in touch with us through our restaurant staff or call management directly, Karen.",t.appendChild(d);const c=document.createElement("div");c.classList.add("contact"),t.appendChild(c);const a=document.createElement("div");a.classList.add("contactItemStaff"),c.appendChild(a);const s=document.createElement("div");s.classList.add("contactItemTitle"),s.textContent="Our Staff",a.appendChild(s);const i=document.createElement("img");i.classList.add("staffImg"),i.src="../src/img/harold.png",a.appendChild(i);const o=document.createElement("div");o.classList.add("contactItemDescription"),o.textContent="+99 461 68 928 \n We're always happy to help",a.appendChild(o);const l=document.createElement("div");l.classList.add("contactItemManager"),c.appendChild(l);const m=document.createElement("div");m.classList.add("contactItemTitle"),m.textContent="Management",l.appendChild(m);const r=document.createElement("img");r.classList.add("managerImg"),r.src="../src/img/jeff-bezos.png",l.appendChild(r);const u=document.createElement("div");u.classList.add("contactItemDescription"),u.textContent="We offer same-day delivery \n +11 69 JEFF-JEFF",l.appendChild(u)}(),t(),s.classList.add("viewing"),c.classList.remove("viewing"),a.classList.remove("viewing")}))})();