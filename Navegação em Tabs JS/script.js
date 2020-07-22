const $ =document.querySelector.bind(document)

function TabNavigation(){
    const html={
        links:[...$('.tab-links').children],
        conteudo:[...$('.tab-content').children],
    }
    function hideAllTabContent(){
        const contents=[...html.contents.children]
        contents.forEach(section =>{
            section.style.display="none"
        })
        function removeAllActiveClass(){

        }
        function
    }
}