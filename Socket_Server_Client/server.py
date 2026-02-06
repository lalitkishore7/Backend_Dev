import socket
import threading

def connect_a_client(conn, add):
    print("New client has been connected")
    data = conn.recv(2048)
    print("Data received from client is", data)
    conn.sendall(b"Server has received your data")

HOST = "localhost"

PORT = 3000

# Created a new socket object
server_socket = socket.socket()

# bind the socket object to the port and host
server_socket.bind((HOST, PORT))

# start listening for new connection
server_socket.listen();

print("server is listening on",HOST,PORT)

while True:
    conn, add = server_socket.accept() # it is accepting a new connection request
    t = threading.Thread(target=connect_a_client, args = (conn, add)) # it is preparing the thread
    t.start() # it starts running the thread



