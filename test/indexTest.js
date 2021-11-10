describe("index.js", () => {
  it("saludo utiliza el valor de la variable nombre", () => {
    expect(saludo).to.equal("Hola " + nombre);
  });
});
