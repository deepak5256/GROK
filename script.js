body {
  font-family: Arial, sans-serif;
}

.container {
  text-align: center;
}

.seats {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.seat-row {
  display: flex;
}

.seat {
  width: 40px;
  height: 40px;
  margin: 5px;
  background-color: #ccc;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
}

.popup {
  background-color: #fff;
  padding: 20px;
}

.popup button {
  margin-top: 10px;
}
