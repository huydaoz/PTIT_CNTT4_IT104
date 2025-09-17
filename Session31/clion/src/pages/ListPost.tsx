import { useEffect, useState, type ChangeEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import axios from "axios";

interface Post {
  id?: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
  content?: string;
}

export default function ListPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [post, setPost] = useState<Post>({
    title: "",
    image: "",
    date:
      new Date().getDate() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getFullYear(),
    status: true,
    content: "",
  });
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleClose = () => {
    setShow(false);
    resetPost();
  };
  const handleShow = () => setShow(true);

  const resetPost = () => {
    setPost({
      title: "",
      image: "",
      date:
        new Date().getDate() +
        "/" +
        (new Date().getMonth() + 1) +
        "/" +
        new Date().getFullYear(),
      status: true,
      content: "",
    });
  };

  async function getAllPosts() {
    try {
      const response = await axios.get("http://localhost:8080/posts");
      setPosts(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function searchPosts(keyword: string) {
    try {
      if (!keyword) {
        getAllPosts();
        return;
      }
      const response = await axios.get(
        `http://localhost:8080/posts?title_like=${keyword}`
      );
      setPosts(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getEditStatus(id: number, check: boolean) {
    try {
      const response = await axios.patch(`http://localhost:8080/posts/${id}`, {
        status: !check,
      });
      setPosts((prevPosts) =>
        prevPosts.map((p) =>
          p.id === id ? { ...p, status: response.data.status } : p
        )
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function getDeletePost(id: number) {
    try {
      await axios.delete(`http://localhost:8080/posts/${id}`);
      setPosts((prevPosts) => prevPosts.filter((p) => p.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  async function getEditPost(id: number) {
    try {
      const response = await axios.get(`http://localhost:8080/posts/${id}`);
      setPost(response.data);
      handleShow();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleSave = async () => {
    try {
      if (post.id) {
        await axios.put(`http://localhost:8080/posts/${post.id}`, post);
      } else {
        await axios.post("http://localhost:8080/posts", post);
      }
      handleClose();
      getAllPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    if (type === "file" && files) {
      setPost({ ...post, [name]: files[0].name });
    } else {
      setPost({ ...post, [name]: value });
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearchTerm(keyword);
    searchPosts(keyword);
  };

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <input
        type="text"
        placeholder="Tìm kiếm bài viết theo tên"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select>
        <option value="">Lựa chọn</option>
        <option value="true">Đã xuất bản</option>
        <option value="false">Chưa xuất bản</option>
      </select>
      <Button variant="primary" onClick={handleShow}>
        Thêm bài viết
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {post.id ? "Sửa bài viết" : "Thêm bài viết mới"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên bài viết</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={post.title}
                onChange={handleChange}
                name="title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control type="file" onChange={handleChange} name="image" />
              {post.image && <p>File hiện tại: {post.image}</p>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung bài viết</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={post.content}
                onChange={handleChange}
                name="content"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {post.id ? "Cập nhật" : "Lưu bài viết"}
          </Button>
        </Modal.Footer>
      </Modal>

      {posts.length === 0 ? (
        <p>Không có kết quả tìm kiếm</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Hình ảnh</th>
              <th>Ngày viết</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.title}</td>
                <td>{p.image}</td>
                <td>{p.date}</td>
                <td>{p.status ? "Đã xuất bản" : "Chưa xuất bản"}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => getEditStatus(p.id!, p.status)}
                  >
                    {p.status ? "Chặn" : "Bỏ chặn"}
                  </Button>{" "}
                  <Button variant="primary" onClick={() => getEditPost(p.id!)}>
                    Sửa
                  </Button>{" "}
                  <Button variant="danger" onClick={() => getDeletePost(p.id!)}>
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
