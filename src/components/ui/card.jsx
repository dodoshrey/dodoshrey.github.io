export function Card({ children, ...props }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 16,
        margin: 8,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// Card subcomponents for composition
export function CardHeader({ children, ...props }) {
  return (
    <div style={{ marginBottom: 8 }} {...props}>
      {children}
    </div>
  );
}
export function CardTitle({ children, ...props }) {
  return (
    <h3 style={{ fontWeight: "bold", fontSize: "1.25rem" }} {...props}>
      {children}
    </h3>
  );
}
export function CardDescription({ children, ...props }) {
  return (
    <div style={{ color: "#666" }} {...props}>
      {children}
    </div>
  );
}
export function CardContent({ children, ...props }) {
  return (
    <div style={{ margin: "8px 0" }} {...props}>
      {children}
    </div>
  );
}
export function CardFooter({ children, ...props }) {
  return (
    <div
      style={{
        borderTop: "1px solid #eee",
        paddingTop: 8,
        marginTop: 8,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
