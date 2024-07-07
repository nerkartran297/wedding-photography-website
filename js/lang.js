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

        At.textContent = "VỀ CHÚNG TÔI";
        Ac.textContent = "Với nhiều năm kinh nghiệm trong vai trò Chuyên gia hôn lễ và tổ chức sự kiện tại Việt Nam. Cùng đội ngũ chuyên nghiệp, tận tâm, đầy đam mê và nhiệt huyết, chúng tôi luôn sẵn sàng đồng hành và lắng nghe mọi nguyện vọng của mỗi vị khách trong từng sự kiện quan trọng của cuộc đời, nhằm đem đến những trải nghiệm hoàn hảo nhất và trọn vẹn nhất.";

        Wt.textContent = "WEDDING PLANNING";
        Wc.innerHTML = `Ngày trọng đại của cuộc đời, chắc hẳn các cặp đôi đều muốn mọi khoảnh khắc đều hoàn hảo. Tuy nhiên có rất nhiều nỗi lo từ địa điểm tổ chức, trang phục, trang trí tiệc cưới, điều phối trong suốt thời gian cử hành hôn lễ, khách mời....và quan trọng hơn hết là vấn đề chi phí.  
        <br><br>
        Thấu hiểu nỗi lo đó, Loveland sẽ là người bạn đáng tin cậy đồng hành cùng Cô dâu – Chú rể trong suốt quá trình từ khâu lên ý tưởng đến khi hoàn thành hôn lễ. `;

        Et.textContent = "TỔ CHỨC SỰ KIỆN";
        Ec.innerHTML = `LOVELAND cung cấp đa dạng các gói dịch vụ và đáp ứng mọi nhu cầu của khách hàng với cam kết mang lại cho khách hàng sự hài lòng, trải nghiệm ấn tượng. 
        <br><br>
        Với nguồn lực chất lượng, năng động, sáng tạo và chuyên nghiệp cho phép chúng tôi đồng hành cùng khách hàng trong mọi giai đoạn của sự kiện.`;

        Tt.textContent = "TOUR";
        Tc.innerHTML = `
        Bạn đang cần “Chữa lành” cho tâm hồn mình? <br><br>
        Bạn muốn gắn kết các cá nhân lại với nhau thông qua những chuyến đi? <br><br>
        Bạn muốn khám phá một địa điểm mới? <br><br>
        Nhưng bạn lại không có quá nhiều thời gian để lên kế hoạch cho chuyến đi, cũng như sắp xếp chu toàn hành trình cho mọi người? 
        <br><br>
        LOVELAND luôn lắng nghe mọi nhu cầu của bạn và cùng bạn  tạo nên những trải nghiệm tuyệt vời nhất.`;

        Mt.textContent = "MICE";
        Mc.innerHTML = `Là sự kết hợp giữ du lịch và sự kiện, MICE không còn quá xa lạ đối với mọi người. <br><br>
        Với kinh nghiệm trong ngành du lịch cũng như tổ chức các sự kiện, chúng tôi đảm bảo sẽ mang đến cho đói tác của mình sự hài lòng, chuyên nghiệp và hoàn mỹ. `;

        document.querySelector('.nA').textContent = "Về chúng tôi";
        document.querySelector('.nH').textContent = "Trang chủ";
        document.querySelector('.nC').textContent = "Liên hệ";
        document.querySelector('.nmA').textContent = "Về chúng tôi";
        document.querySelector('.nmH').textContent = "Trang chủ";
        document.querySelector('.nmC').textContent = "Liên hệ";
        document.querySelector('.lienhe').textContent = "Liên hệ ngay";
        document.querySelector('.guitn').value = "Liên hệ ngay";
        document.querySelector('.cf').textContent = "Liên hệ";
        document.querySelector('.aftitle').textContent = "Về chúng tôi";
        document.querySelector('.afcontent').textContent = "Loveland tự hào là người bạn đồng hành tin cậy của các cặp đôi và doanh nghiệp. Đội ngũ chuyên gia của chúng tôi luôn tận tâm, sáng tạo và không ngừng cập nhật xu hướng mới nhất, đảm bảo mang đến những trải nghiệm đẳng cấp và đáng nhớ cho mỗi sự kiện. Chúng tôi luôn lắng nghe, thấu hiểu và biến mọi ước mơ của bạn thành hiện thực.";
    } else {
        document.querySelector('.langbtn').style.backgroundColor = 'rgb(253, 94, 94)';
        document.querySelector('.langbtn').style.color = 'rgb(230, 255, 0)';
        document.querySelector('.langbtn').textContent = "VI";

        At.textContent = "ABOUT US";
        Ac.textContent = "With many years of experience as a Wedding Planner and Event Organizer in Vietnam. With a professional, dedicated, passionate, and enthusiastic team, we are always ready to accompany and listen to the wishes of each guest in every important event of their life, aiming to bring the most perfect and complete experiences.";

        Wt.textContent = "WEDDING PLANNING";
        Wc.innerHTML = `Your special day deserves nothing less than perfection. Loveland is here to take the stress out of wedding planning, from crafting unique concepts and selecting the perfect venue to creating stunning decor and providing seamless coordination throughout your celebration. We are committed to delivering a flawless wedding that reflects your individual style and love story.`;

        Et.textContent = "EVENTS";
        Ec.innerHTML = `Loveland is confident in delivering impactful and successful events that cater to your specific needs. Whether it's a conference, seminar, exhibition, anniversary celebration, or entertainment event, we have the comprehensive and creative solutions you're looking for. Our professionalism, dedication, and expertise will help you make a lasting impression on your guests.`;

        Tt.textContent = "TOURS";
        Tc.innerHTML = `Looking to explore new destinations and create unforgettable memories with your loved ones? Let Loveland be your guide. We design unique itineraries that blend cultural immersion, culinary delights, and local experiences, ensuring you have a truly memorable and relaxing getaway.`;

        Mt.textContent = "MICE";
        Mc.innerHTML = `Loveland is a trusted partner for businesses seeking professional and effective MICE solutions. With extensive experience and a vast network of partners, we provide comprehensive services, from planning and organization to logistics, helping businesses achieve their marketing and business goals.`;


        document.querySelector('.nA').textContent = "About Us";
        document.querySelector('.nH').textContent = "Home";
        document.querySelector('.nC').textContent = "Contact";
        document.querySelector('.nmA').textContent = "About Us";
        document.querySelector('.nmH').textContent = "Home";
        document.querySelector('.nmC').textContent = "Contact";
        document.querySelector('.lienhe').textContent = "Book now";
        document.querySelector('.guitn').value = "Send message";
        document.querySelector('.cf').textContent = "Contact Us";
        document.querySelector('.aftitle').textContent = "About Us";
        document.querySelector('.afcontent').textContent = "Loveland is proud to be a trusted partner for couples and businesses alike. Our team of dedicated professionals is passionate about creating exceptional experiences, constantly staying ahead of the latest trends to ensure your event is both memorable and sophisticated. We listen, we understand, and we turn your dreams into reality.";
    }
};

render();

const sections = document.querySelectorAll('.slide-in, .slide-in-right');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('active');
        }
    });
});

const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; /* Vị trí ngẫu nhiên theo chiều ngang */
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; /* Thời gian rơi ngẫu nhiên */
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); /* Xóa trái tim sau 5 giây */
}

setInterval(createHeart, 300); /* Tạo trái tim mới sau mỗi 300ms */



