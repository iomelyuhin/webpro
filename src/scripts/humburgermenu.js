function menu() {
  const burger = document.querySelector('#humburger');
  const humMenu = document.querySelector('.navigation--header');
  const wrapper = document.querySelector('.wrapper');
  const socials = document.querySelector('.socials--header')

  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    humMenu.classList.toggle('active');
    wrapper.classList.toggle('wrapper--humMenu');
    socials.classList.toggle('socials--humburger')
  });

  humMenu.addEventListener('click', ()=> {
    const target = event.target;


    if(target.classList.contains('navigation__link')) {
      burger.classList.toggle('is-active');
      humMenu.classList.toggle('active');
      wrapper.classList.toggle('wrapper--humMenu');
    }

  })
};

menu();