//
//  QuizViewController.swift
//  Quiz
//
//  Created by Greg Ha on 12/9/17.
//  Copyright © 2017 nyu.edu. All rights reserved.
//

import UIKit

class QuizViewController: UIViewController {
    
    let questions = ["What is the runtime of quicksort?", "Which is not a pillar of OOP", "Which of these methods can only defined once?", "String in Java is a ___"];
    
    let answers = [["O(n log n)", "O(n)", "O(log n)"], ["Encapsulation", "Polymorphism", "Negation"], ["main","finalize","static"], ["class", "object", "variable"]];
    
    lazy var questionCount = questions.count;
    
    lazy var currentQuestion = Int(arc4random_uniform(UInt32(questionCount)));
    var rightAnswer = 0;
    
    // Question
    @IBOutlet weak var question: UILabel!
    
    // Button action
    @IBAction func answer(_ sender: AnyObject) {
        if (sender.tag == Int(rightAnswer)){
            performSegue(withIdentifier: "AlarmTableViewController", sender: self)
        }
        else{
            newQuestion();
        }
    }
    
    override func viewDidAppear(_ animated: Bool){
        newQuestion();
    }
    
    func newQuestion(){
        question.text = questions[currentQuestion];
        rightAnswer = Int(arc4random_uniform(3)+1);
        
        // new Button
        var button:UIButton = UIButton();
        var x = 1;
        
        for i in 1...3{
            button = view.viewWithTag(i) as! UIButton;
            if (i == Int(rightAnswer)){
                button.setTitle(answers[currentQuestion][0], for: .normal);
            }
            else {
                button.setTitle(answers[currentQuestion][x], for: .normal);
                x = 2;
            }
            
        }
        currentQuestion += 1;
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
}


