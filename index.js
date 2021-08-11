var p = document.createElement('p');
p.textContent = "Drag the link to your bookmark bar and click your new bookmarklet to create a new comment without all the tiresome scrolling:";
var i = document.createElement('input')
var b = document.createElement('a');
b.href="javascript:fetch('https://www.khanacademy.org/api/internal/discussions/kaencrypted_753f8b565fe5eb7c18264e7dc0dd97d5_ab4b51515c2c9e7a0e96ca6e409d636e24a29ae4a564c0e3c2fa7f77f187e0f99effd52c0d37355706fbf43683aa88542861ff93b6661e59c3867530d0c35cc743b79dd50a43e2684ececaf7ec8d43bc8312cc9173eeb8bd78434170489361b7e32339ec43ac34d3fe2fab589d10b5823928ff535af745d9ef628f399198a73f20ca14bc99b3641e36304d69f7f7f96b42d0bf726b1d57fb0d777b303db18cc162b7c36be873449f7dc6877953580965aa7cbfa244589bc8827a56923a4ad010/replies', {   method: 'POST',   headers: {     'Content-Type': 'application/json',     'X-KA-Fkey': document.cookie.match(/fkey=(.*?)($|;)/)[1]   },   body: JSON.stringify({ text: localStorage.getItem('comment')}) }).then(res => res.json()).then(console.log);";
b.textContent = "Create New Comment"

window.addEventListener('onkeyup', function(){
  localStorage.setItem('comment', i.value);
});

document.body.appendChild(p);
document.body.appendChild(i);
document.body.appendChild(b);
