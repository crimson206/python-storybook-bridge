import gradio as gr

def add(x, y):
    return x + y

iface = gr.Interface(
    fn=add,
    inputs=[gr.Number(label="First Number"), gr.Number(label="Second Number")],
    outputs="number",
    _api_mode=True,
    title="Simple Addition"
)

if __name__ == "__main__":
    iface.launch()
