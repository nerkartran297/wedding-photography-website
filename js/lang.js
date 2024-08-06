const At = document.querySelector('.aboutusTitle');
const Ac = document.querySelector('.aboutusContent');

const Wt = document.querySelector('.weddingTitle');
const Wc = document.querySelector('.weddingContent');

const Et = document.querySelector('.eventTitle');
const Ec = document.querySelector('.eventContent');

const Tt = document.querySelector('.tourTitle');
const Tc = document.querySelector('.tourContent');

const Mt = document.querySelector('.miceTitle');
const Mc = document.querySelector('.miceContent');

const ds = document.querySelector('.dessub');

const langBTN = document.querySelector('.langua');

let lang = true; // true = Vietnamese / false = English

langBTN.addEventListener('click', () => {
    lang = !lang;
    render();
});

function render() {
    if (lang) {
        document.querySelector('.langbtn').style.backgroundColor = 'rgb(55, 130, 251)';
        document.querySelector('.langbtn').style.color = 'white';
        document.querySelector('.langbtn').textContent = "EN";

        if (At && Ac) {
            At.textContent = "Về chúng tôi";
            Ac.textContent = "Với nhiều năm kinh nghiệm trong vai trò Chuyên gia hôn lễ và tổ chức sự kiện tại Việt Nam. Cùng đội ngũ chuyên nghiệp, tận tâm, đầy đam mê và nhiệt huyết, chúng tôi luôn sẵn sàng đồng hành và lắng nghe mọi nguyện vọng của mỗi vị khách trong từng sự kiện quan trọng của cuộc đời, nhằm đem đến những trải nghiệm hoàn hảo nhất và trọn vẹn nhất.";
            Wt.textContent = "Wedding Planning";
            Wc.innerHTML = `Ngày trọng đại của cuộc đời, chắc hẳn các cặp đôi đều muốn mọi khoảnh khắc đều hoàn hảo. Tuy nhiên có rất nhiều nỗi lo từ địa điểm tổ chức, trang phục, trang trí tiệc cưới, điều phối trong suốt thời gian cử hành hôn lễ, khách mời....và quan trọng hơn hết là vấn đề chi phí.  
            <br><br>
            Thấu hiểu nỗi lo đó, Loveland sẽ là người bạn đáng tin cậy đồng hành cùng Cô dâu – Chú rể trong suốt quá trình từ khâu lên ý tưởng đến khi hoàn thành hôn lễ. `;
            Et.textContent = "Tổ chức sự kiện";
            Ec.innerHTML = `LOVELAND cung cấp đa dạng các gói dịch vụ và đáp ứng mọi nhu cầu của khách hàng với cam kết mang lại cho khách hàng sự hài lòng, trải nghiệm ấn tượng. 
            <br><br>
            Với nguồn lực chất lượng, năng động, sáng tạo và chuyên nghiệp cho phép chúng tôi đồng hành cùng khách hàng trong mọi giai đoạn của sự kiện.`;
            Tt.textContent = "Tour";
            Tc.innerHTML = `
Khắp Việt Nam là những điểm đến đặc biệt đẹp đẽ với di sản phong phú và phong cảnh ngoạn mục, từ vùng trung du Bắc Bộ đến những bãi biển ở Nam Bộ. Đắm mình trong vẻ đẹp quyến rũ vượt thời gian của Hà Nội, khám phá sự huyền bí của Vịnh Hạ Long và dạo quanh những con phố nhộn nhịp của Thành phố Hồ Chí Minh. Khám phá Việt Nam với hành trình được cá nhân hóa phù hợp với sở thích của bạn từ các chuyên gia du lịch tại LOVELAND DMC.`;

            Mt.textContent = "Mice";
            Mc.innerHTML = `Là sự kết hợp giữ du lịch và sự kiện, MICE không còn quá xa lạ đối với mọi người. <br><br>
            Với kinh nghiệm trong ngành du lịch cũng như tổ chức các sự kiện, chúng tôi đảm bảo sẽ mang đến cho đói tác của mình sự hài lòng, chuyên nghiệp và hoàn mỹ. `;
            document.querySelector('.guitn').value = "Liên hệ ngay";

            ds.textContent = "Chúng tôi rất vui mừng được chào đón tất cả các bạn đến đây và chiêm ngưỡng những cảnh quan tuyệt đẹp của Việt Nam, thả hồn trên những bãi biển cát trắng, trải nghiệm nền văn hóa tươi đẹp độc đáo của chúng tôi và gặp gỡ những con người ở đất nước thân thiện nhất. Đặc biệt, để thưởng thức ẩm thực hảo hạng của chúng tôi tại các nhà hàng được xếp hạng Michelin hoặc tham gia cùng chúng tôi trong các sự kiện văn hóa, âm nhạc, thể thao và du lịch nổi bật!";
        }



        document.querySelector('.nA').textContent = "VỀ CHÚNG TÔI";
        document.querySelector('.nH').textContent = "TRANG CHỦ";
        document.querySelector('.nC').textContent = "LIÊN HỆ";
        document.querySelector('.nT').textContent = "THUÊ ĐỒ TRANG TRÍ";
        document.querySelector('.nmA').textContent = "Về chúng tôi";
        document.querySelector('.nmH').textContent = "Trang chủ";
        document.querySelector('.nmC').textContent = "Liên hệ";
        document.querySelector('.lienhe').textContent = "Liên hệ ngay";
        document.querySelector('.aftitle').textContent = "Về chúng tôi";
        document.querySelector('.afcontent').textContent = "Loveland tự hào là người bạn đồng hành tin cậy của các cặp đôi và doanh nghiệp. Đội ngũ chuyên gia của chúng tôi luôn tận tâm, sáng tạo và không ngừng cập nhật xu hướng mới nhất, đảm bảo mang đến những trải nghiệm đẳng cấp và đáng nhớ cho mỗi sự kiện. Chúng tôi luôn lắng nghe, thấu hiểu và biến mọi ước mơ của bạn thành hiện thực.";
        document.querySelector('.cf').textContent = "Liên hệ";

    } else {
        document.querySelector('.langbtn').style.backgroundColor = 'rgb(253, 94, 94)';
        document.querySelector('.langbtn').style.color = 'rgb(230, 255, 0)';
        document.querySelector('.langbtn').textContent = "VI";

        if (At && Ac) {
            At.textContent = "About Us";
            Ac.textContent = "With many years of experience as a Wedding Planner and Event Organizer in Vietnam. With a professional, dedicated, passionate, and enthusiastic team, we are always ready to accompany and listen to the wishes of each guest in every important event of their life, aiming to bring the most perfect and complete experiences.";

            Wt.textContent = "Wedding Planning";
            Wc.innerHTML = `Your special day deserves nothing less than perfection. Loveland is here to take the stress out of wedding planning, from crafting unique concepts and selecting the perfect venue to creating stunning decor and providing seamless coordination throughout your celebration. We are committed to delivering a flawless wedding that reflects your individual style and love story.`;

            Et.textContent = "Events";
            Ec.innerHTML = `Loveland is confident in delivering impactful and successful events that cater to your specific needs. Whether it's a conference, seminar, exhibition, anniversary celebration, or entertainment event, we have the comprehensive and creative solutions you're looking for. Our professionalism, dedication, and expertise will help you make a lasting impression on your guests.`;

            Tt.textContent = "Tours";
            Tc.innerHTML = `Vietnam offers extraordinary journeys with its rich heritage and breathtaking landscapes from the Northernmost mountains to the Southernmost beaches. Immerse yourself in the timeless charm of Hanoi, cruise along the mystical Halong Bay, and explore the bustling streets of Ho Chi Minh City. Explore Vietnam with personalised itineraries tailored to your interests from travel experts at LOVELAND DMC.`;

            Mt.textContent = "Mice";
            Mc.innerHTML = `Loveland is a trusted partner for businesses seeking professional and effective MICE solutions. With extensive experience and a vast network of partners, we provide comprehensive services, from planning and organization to logistics, helping businesses achieve their marketing and business goals.`;
            document.querySelector('.guitn').value = "Send message";

            ds.textContent = "We are more than happy to welcome you all here and admire Vietnam stunning landscapes, free your soul on white sandy beaches, experience our unique and beautiful culture and meet the people in the most friendly country. Particularly, to indulge in our scrumptious cuisine at Michelin rated restaurants or to join us in outstanding mega culture, music, sports and tourism events!";
        }

        document.querySelector('.nA').textContent = "ABOUT US";
        document.querySelector('.nH').textContent = "HOME";
        document.querySelector('.nC').textContent = "CONTACT";
        document.querySelector('.nmA').textContent = "About Us";
        document.querySelector('.nmH').textContent = "Home";
        document.querySelector('.nmC').textContent = "Contact";
        document.querySelector('.nT').textContent = "DECORATION RENTAL";
        document.querySelector('.lienhe').textContent = "Book now";
        document.querySelector('.cf').textContent = "Contact Us";
        document.querySelector('.aftitle').textContent = "About Us";
        document.querySelector('.afcontent').textContent = "Loveland is proud to be a trusted partner for couples and businesses alike. Our team of dedicated professionals is passionate about creating exceptional experiences, constantly staying ahead of the latest trends to ensure your event is both memorable and sophisticated. We listen, we understand, and we turn your dreams into reality.";
    }
};

render();

const sections = document.querySelectorAll('.slide-in, .slide-in-right');

if (sections)
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('active');
            }
        });
    });

// const heartsContainer = document.getElementById('hearts-container');

// function createHeart() {
//     const heart = document.createElement('div');
//     heart.classList.add('heart');
//     heart.style.left = Math.random() * 100 + 'vw';
//     heart.style.animationDuration = Math.random() * 2 + 3 + 's';
//     heartsContainer.appendChild(heart);

//     setTimeout(() => {
//         heart.remove();
//     }, 5000);
// }

// setInterval(createHeart, 300);



