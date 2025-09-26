document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Ngăn chặn form gửi đi mặc định

        const destination = document.getElementById('destination').value;
        const date = document.getElementById('date').value;
        const guests = document.getElementById('guests').value;

        // Kiểm tra dữ liệu
        if (!destination || !date || !guests) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        if (guests <= 0) {
            alert('Số người phải lớn hơn 0.');
            return;
        }

        // Tạo đối tượng booking
        const booking = {
            destination: destination,
            date: date,
            guests: guests
        };

        // Ở đây, bạn sẽ gửi dữ liệu booking đến server (backend)
        // Dùng fetch API để gửi dữ liệu lên server
        console.log('Thông tin booking đã được gửi:', booking);
        alert(`Chúc mừng! Bạn đã đặt tour thành công đến ${destination} vào ngày ${date} cho ${guests} người.`);

        // Reset form sau khi gửi thành công
        bookingForm.reset();
    });
});