import socket
print("Starting a client: 1")

HOST = "localhost"
PORT = 3000 # this is the port for the server to connect

client_socket = socket.socket()

# here is 3-way handshake is done
client_socket.connect((HOST, PORT)) # client needs to connect to the server socket

client_socket.sendall(b"Hello from the client 1")

response_from_server = client_socket.recv(2048)

print(response_from_server)