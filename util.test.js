const{ generateText }= require ('./util');

test('should output name and age',() =>{
    const text = generateText('david', 34);
    expect(text).toBe('david (34 years old)');
}  );


