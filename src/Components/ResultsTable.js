import React from 'react'
import '../index.css'

export default function App() {
    return (
      <div  className="table">
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Enneatype Descriptions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="typeLetter">a: </td>
                <td><strong>The Peacemaker:</strong> The Easygoing, Self-Effacing Type: Receptive, Reassuring, Agreeable, and Complacent. <a href="https://www.enneagraminstitute.com/type-9">more...</a></td>
            </tr>
            <tr>
                <td className="typeLetter">b: </td>
                <td><strong>The Loyalist:</strong> The Committed, Security-Oriented Type: Engaging, Responsible, Anxious, and Suspicious. <a href="https://www.enneagraminstitute.com/type-6">more...</a></td> 
            </tr>
            <tr>
                <td className="typeLetter">c: </td>
                <td><strong>The Achiever:</strong> The Success-Oriented, Pragmatic Type: Adaptive, Excelling, Driven, and Image-Conscious. <a href="https://www.enneagraminstitute.com/type-3">more...</a></td>
            </tr>
                <td className="typeLetter">d: </td>
                <td><strong>The Reformer:</strong> The Rational, Idealistic Type: Principled, Purposeful, Self-Controlled, and Perfectionistic. <a href="https://www.enneagraminstitute.com/type-1">more...</a></td>
            <tr>
                <td className="typeLetter">e: </td>
                <td><strong>The Individualist:</strong> The Sensitive, Withdrawn Type: Expressive, Dramatic, Self-Absorbed, and Temperamental. <a href="https://www.enneagraminstitute.com/type-4">more...</a></td>
            </tr>
            <tr>
                <td className="typeLetter">f: </td>
                <td><strong>The Helper:</strong> The Caring, Interpersonal Type: Demonstrative, Generous, People-Pleasing, and Possessive. <a href="https://www.enneagraminstitute.com/type-2">more...</a></td>
            </tr>
            <tr>
                <td className="typeLetter">g: </td>
                <td><strong>The Challenger:</strong> The Powerful, Dominating Type: Self-Confident, Decisive, Willful, and Confrontational. <a href="https://www.enneagraminstitute.com/type-8">more...</a></td>
            </tr>
            <tr>
                <td className="typeLetter">h: </td>
                <td><strong>The Investigator:</strong> The Intense, Cerebral Type: Perceptive, Innovative, Secretive, and Isolated. <a href="https://www.enneagraminstitute.com/type-5">more...</a></td>
            </tr>
            <tr>
                <td className="typeLetter">i: </td>
                <td><strong>The Enthusiast:</strong> The Busy, Fun-Loving Type: Spontaneous, Versatile, Distractible, and Scattered. <a href="https://www.enneagraminstitute.com/type-7">more...</a></td> 
                </tr>
             </tbody>
        </table>
      </div>
    );
  }