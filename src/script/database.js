const posts = [
  {
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Samuel Phillip",
    role: "Front end Engineer",
    title:
      "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
    description:
      "A Codem Solutions, empresa especializada em Tecnologia da informação, irá iniciar o seu primeiro programa de estágio, com o prazo de inscrições entre os dias 12 e 25 de setembro. Esta é uma excelente oportunidade para estudantes de TI que desejam adquirir experiência prática em um ambiente de trabalho dinâmico. Os estagiários selecionados terão a oportunidade de trabalhar em projetos emocionantes e aprender com profissionais experientes no campo. Não perca esta chance de iniciar sua carreira em tecnologia conosco!",
  },
  {
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=0&h=750&dpr=1",
    name: "Emily Rodriguez",
    role: "Data Scientist",
    title: "Workshop Gratuito: Introdução à Inteligência Artificial",
    description:
      "Participe do nosso workshop gratuito e aprenda os conceitos fundamentais da inteligência artificial. Não é necessário conhecimento prévio. Durante este workshop de dois dias, você terá a oportunidade de explorar os princípios da IA, suas aplicações em diversos setores e trabalhar em projetos práticos. Nossos instrutores são especialistas na área e estarão à disposição para responder às suas dúvidas. Ao final do workshop, você terá uma compreensão sólida da IA e estará pronto para explorar oportunidades emocionantes nesse campo em crescimento.",
  },
  {
    img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "John Smith",
    role: "Product Manager",
    title: "Lançamento do Novo Produto: Smartphone XYZ Pro",
    description:
      "Estamos empolgados em anunciar o lançamento do nosso mais recente smartphone, o XYZ Pro. Venha conferir suas incríveis características e funcionalidades. O XYZ Pro é equipado com uma tela de alta resolução, uma câmera de última geração e um processador ultrarrápido. Além disso, oferecemos uma variedade de opções de cores e armazenamento para atender às suas necessidades. Não perca a chance de experimentar a revolução em tecnologia móvel. Junte-se a nós no evento de lançamento e seja um dos primeiros a ter o XYZ Pro em suas mãos!",
  },
  {
    img: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Alice Johnson",
    role: "Designer de UI/UX",
    title: "Conferência de Design de 3 Dias - Inscreva-se agora!",
    description:
      "Junte-se a nós na maior conferência de design do ano. Palestrantes renomados, workshops práticos e oportunidades de networking aguardam você. A conferência de design de 3 dias abrangerá uma ampla variedade de tópicos, desde design de interface de usuário e experiência do usuário até tendências de design de vanguarda. Você terá a oportunidade de participar de sessões interativas, conhecer designers talentosos e aprender com os melhores do setor. Não perca esta chance de aprimorar suas habilidades de design e expandir sua rede profissional.",
  },
  {
    img: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Michael Davis",
    role: "Engenheiro de Software",
    title: "Novo Curso Online Gratuito: Desenvolvimento Web Avançado",
    description:
      "Aprenda a desenvolver aplicativos da web avançados com as mais recentes tecnologias. Inscreva-se agora e aprimore suas habilidades de programação. Nosso curso online gratuito de Desenvolvimento Web Avançado oferece uma ampla gama de tópicos, incluindo desenvolvimento front-end e back-end, gerenciamento de bancos de dados e segurança da web. Você terá acesso a aulas em vídeo, exercícios práticos e suporte da nossa equipe de instrutores experientes. Este é o momento perfeito para investir em sua educação e impulsionar sua carreira como desenvolvedor web.",
  },
  {
    img: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Sophia Turner",
    role: "Marketing Manager",
    title:
      "Webinar: Estratégias de Marketing Digital para o Sucesso Empresarial",
    description:
      "Participe do nosso webinar e descubra as melhores estratégias de marketing digital para impulsionar o sucesso do seu negócio. Durante este webinar interativo, você aprenderá sobre táticas de marketing digital comprovadas, incluindo otimização de mecanismos de busca (SEO), publicidade nas redes sociais e marketing de conteúdo. Nossos especialistas compartilharão dicas práticas para aumentar a visibilidade da sua marca e atrair mais clientes. Esteja preparado para uma sessão informativa e envolvente que o ajudará a alavancar suas estratégias de marketing.",
  },
  
];





//post render
posts.forEach((card) =>{
  const containerCredentials = document.createElement("div")
  containerCredentials.classList.add("timeline__container__credentials")
  document.querySelector(".timeline").appendChild(containerCredentials)



  const img = document.createElement("img")
  img.classList.add("timeline__credentials__img")
  img.src = card.img

  const nameUser = document.createElement("h2")
  nameUser.classList.add("timeline__credentials__name")
  nameUser.innerText = card.name


  const role = document.createElement("p")
  role.classList.add("timeline__credentials__role")
  role.innerText = card.role

const containerTitle = document.createElement("div")
containerTitle.classList.add("timeline__container__title")
containerCredentials.appendChild(containerTitle)

const containerDescript = document.createElement("div")
containerDescript.classList.add("timeline__container__descript")
containerCredentials.appendChild(containerDescript)

  const titlePosts = document.createElement("h2")
  titlePosts.classList.add("timeline__post__title")
  titlePosts.innerText = card.title

  const description = document.createElement("p")
  description.classList.add("timeline__post__descript")
  description.innerText = card.description



const button = document.createElement("button")
button.classList.add("timeline__post__button")
button.innerHTML = "Abrir Post"

const favorite = document.createElement("span")
favorite.innerHTML = "favorite"
favorite.classList.add("material-symbols-outlined" , "timeline__Post__favorite")

const numberFavorite = document.createElement("p")
    numberFavorite.classList.add ("time__line_post_number")
    numberFavorite.innerText = "0"


containerCredentials.appendChild(img)
containerCredentials.appendChild(nameUser)
containerCredentials.appendChild(role)
 containerTitle.appendChild(titlePosts)
 containerDescript.appendChild(description)
 containerCredentials.appendChild(button)
 containerCredentials.appendChild(favorite)
 containerCredentials.appendChild(numberFavorite)
});

//send post
const sendPost = ()=>{
  const input = document.querySelector(".posting__title")
  const button = document.querySelector(".posting__button")
  const textarea = document.querySelector(".posting__descript")
  const buttonText = document.querySelector(".posting__button__text")

textarea.addEventListener("input", () =>{
  if(textarea.value.length > 0 && input.value.length > 0){
    button.style.background = "var(--brand-color-one)"
    buttonText.style.color = "var(--white-fixed)"
  }else if(input.value.length == 0){
    button.style.background = "var(--grey-color-four)"
  }else{

    button.style.background = "var(--grey-color-four)"
    buttonText.style.color = "var(--grey-opacity-one)"
  }
})

button.addEventListener("click", () =>{
  if(input.value.length > 0 && textarea.value.length >0){

   posts.push(
    { img : "./src/asset/img/pngegg.png",
   name: `${document.querySelector(".credentials__name").textContent}`,
   role:`${document.querySelector(".credentials__ocupation").textContent}`,
   title: `${input.value}`,
   description :`${textarea.value}`
 }
 )

posts.forEach((card) =>{
  const containerCredentials = document.createElement("div")
  containerCredentials.classList.add("timeline__container__credentials")
  document.querySelector(".timeline").appendChild(containerCredentials)



const img = document.createElement("img")
img.classList.add("timeline__credentials__img")
img.src = card.img

const nameUser = document.createElement("h2")
nameUser.classList.add("timeline__credentials__name")
nameUser.innerText = card.name


const role = document.createElement("p")
role.classList.add("timeline__credentials__role")
role.innerText = card.role

const containerTitle = document.createElement("div")
containerTitle.classList.add(".timeline__container__title")
containerCredentials.appendChild(containerTitle)

const titlePosts = document.createElement("h2")
titlePosts.classList.add(".timeline__post__title")
titlePosts.innerText = card.title

const containerDescript = document.createElement("div")
containerDescript.classList.add(".timeline__container__descript")
containerCredentials.appendChild(containerDescript)

const description = document.createElement("p")
description.innerText = card.description
description.classList.add(".timeline__post__descript")

const button = document.createElement("button")
button.classList.add("timeline__post__button")
button.innerHTML = "Abrir Post"

const favorite = document.createElement("span")
favorite.innerHTML = "favorite"
favorite.classList.add("material-symbols-outlined" , "timeline__Post__favorite")

const numberFavorite = document.createElement("p")
numberFavorite.classList.add ("time__line_post_number")
numberFavorite.innerText = "0"



containerCredentials.appendChild(img)
containerCredentials.appendChild(nameUser)
containerCredentials.appendChild(role)
containerTitle.appendChild(titlePosts)
containerDescript.appendChild(description)
containerCredentials.appendChild(button)
containerCredentials.appendChild(favorite)
containerCredentials.appendChild(numberFavorite) 

  });
  input.value = ""
  textarea.value = ""
  
  }

  postFavorite();
  showModal();
})



}
sendPost();



// //follow
const follow = () =>{
 const buttonFollow =  document.querySelectorAll(".suggest__cards__button")
 buttonFollow.forEach((buttons) => {

  buttons.id = "unfollow"
  buttons.addEventListener("click", () =>{
     if(buttons.id == "unfollow"){
      buttons.id ="follow"
      buttons.style.background = "var(--white-fixed)"
      buttons.style.color = "var(--grey-color-zero)"
      buttons.innerText ="Seguindo"

     }else if(buttons.id == "follow"){
      buttons.id ="unfollow"
      buttons.style.background = "var(--brand-color-one)"
      buttons.style.color = "var(--white-fixed)"
      buttons.innerText = "Seguir"
     }
    })


  
  })

   

}
 follow();


// // favorite
const  postFavorite = () =>{
  const favorite = document.querySelectorAll(".timeline__Post__favorite")
  let cont = 0 
  favorite.forEach((like) =>{
    like.id ="not__favorite"
    const numberLikes = like.parentElement.children[7]
    like.addEventListener("click", () =>{
      if(like.id == "not__favorite"){
        like.id = "favorite"
        like.style.color = "var(--feedback-like)"
        cont =+ 1
        numberLikes.innerHTML = `${cont}`
        
      }else if(like.id == "favorite"){
        like.id = "not__favorite"  
        like.style.color = ""
        numberLikes.innerHTML = `${cont-1}`
      }
    })
    })
}
postFavorite();


//Modal
const showModal = () => {
  const button = document.querySelectorAll(".timeline__post__button")
  const modal = document.querySelector("#ModalPost")
  const closemodal = document.querySelector(".Close__modalPost")
  const html = document.querySelector("html")
  button.forEach((buttons) =>{
    buttons.addEventListener("click", () =>{
       modal.insertAdjacentElement("afterbegin",buttons.parentElement.cloneNode(true))
       modal.showModal()
       modal.children[0].children[5].style.display = "none"
       modal.children[0].children[6].style.display = "none"
       modal.children[0].children[7].style.display = "none"
       modal.children[0].children[1].style.display ="block"
       
    })
  })
  closemodal.addEventListener("click", () => {
    modal.close()
    modal.removeChild(modal.children[0])

  
  })
 
}
showModal();
